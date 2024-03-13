// 模板地址
// https://api.github.com/repos/ACL4SSR/ACL4SSR/contents/Clash/config?ref=master

import { extend } from 'umi-request';

export const aclssrRequest = extend({
    prefix: "https://api.github.com/repos/ACL4SSR/ACL4SSR",
    timeout: 10000,
});

export type ACL4SSRContentItem = {
    name: string,
    path: string,
    sha: string,
    size: number,
    url: string,
    html_url: string,
    git_url: string,
    download_url: string,
    type: "file",
    _links: {
        self: string,
        git: string,
        html: string,
    }
};

// 获取ACLSSR列表
export async function getACLSSRList() : Promise<ACL4SSRContentItem[]>{
    return await aclssrRequest.get<ACL4SSRContentItem[]>("/contents/Clash/config?ref=master");
}

