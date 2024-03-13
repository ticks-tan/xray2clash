/**
 * Clash 配置
 */

type ClashGlobalCfg = {
    "mixed-port"?: number,
    "allow-lan"?: boolean,
    "log-level"?: "info" | "debug" | "silent" | "error" | "warning",
    "external-controller"?: string,
}

type ClashDNSCfg = {
    enabled?: boolean,
    listen?: string,
    ipv6?: boolean,
    "default-nameserver"?: string[],
    "enhanced-mode"?: "fake-ip" | "redir-host",
    "fake-ip-range"?: string,
    "fake-ip-filter"?: string[],
    nameserver?: string[],
    fallback?: string,
    "fallback-filter"?: {
        geoip?: boolean,
        "geoip-code"?: string,
        geosite?: string,
        ipcidr?: string[],
        domain?: string[],
    }
}

type ClashProxiesItem = {
    name: string,
    type: "vless",
    server: string,
    port: number,
    uuid: string,
    alterId?: number,
    udp: boolean,
    tls: boolean,
    network: "tcp" | "grpc" | "ws" | "kcp" | "http" | "quic" | "h2" | "httpupgrade",
    flow?: "xtls-rprx-direct" | "xtls-rprx-vision" | "xtls-rprx-splice",
    "client-fingerprint": string,
    servername?: string,
    "skip-cert-verify"?: boolean,
    "ws-opts"?: {
        path: string,
        headers?: {
            Host: string,
        }
    },
    "h2-opts"?: {
        host: string[],
        path: string,
    },
    "http-opts"?: {
        method: string,
        path: string[],
        headers: {
            Connection: string[],
            "ip-version"?: "ipv4" | "ipv6" | "dual"
        }
    },
    "reality-opts"?: {
        "public-key": string,
        "short-id"?: string,
        "spider-x"?: string,
    },
    "grpc-opts"?: {
        "grpc-service-name": string,
        authority?: string,
        mode?: "gun" | "multi" | "guna"
    },
}

type ClashProxyGroupItem = {
    name: string,
    type: string,
    proxies: string[],
    url?: string,
    interval?: number,
    tolerance?: number,

}


type ClashConfig = 
    ClashGlobalCfg & 
    ClashDNSCfg &
    {
        proxies: ClashProxiesItem[],
        "proxy-groups": ClashProxyGroupItem[],
    };