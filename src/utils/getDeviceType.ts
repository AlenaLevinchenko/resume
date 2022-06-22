export const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return EDeviceType.TABLET;
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return EDeviceType.MOBILE;
    }
    return EDeviceType.DESKTOP;
};

export enum EDeviceType {
    MOBILE = 'mobile',
    DESKTOP = 'desktop',
    TABLET = 'tablet'
}