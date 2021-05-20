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
    serverConnectionFailed = 'Server connection failed, Try again in some time'
}
