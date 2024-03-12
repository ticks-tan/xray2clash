// 模板地址
// https://api.github.com/repos/ACL4SSR/ACL4SSR/contents/Clash/config?ref=master

import { extend } from 'umi-request';

const aclssrRequest = extend({
    prefix: "https://api.github.com/repos/ACL4SSR/ACL4SSR",
    timeout: 10000,
});

type ACL4SSRContentItem = {
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
export async function getACLSSRList() {
    return await aclssrRequest.get<ACL4SSRContentItem[]>("/contents/Clash/config?ref=master");
}