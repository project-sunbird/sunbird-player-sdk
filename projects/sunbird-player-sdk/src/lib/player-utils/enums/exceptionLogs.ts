export enum errorCode {
    contentCompatibility = 'CPV2_CONT_COMP_01',
    contentLoadFails = 'CPV2_CONT_LOAD_FAIL_01',
    internetConnectivity = 'CPV2_INT_CONNECT_01',
    streamingUrlSupport = 'CPV2_INT_STREAMINGURL_01'
}

export enum errorMessage {
    contentCompatibility = 'content compatibility error',
    contentLoadFails = 'content load failed',
    internetConnectivity = 'content failed to load , No Internet Available',
    streamingUrlSupport = 'streaming url is not supported',
    serverConnectionFailed = 'Unable to load content. Refresh and try again later. If you are unable to view content even after a while, Contact your system administrator'
}
