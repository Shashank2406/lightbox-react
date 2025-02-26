import * as React from 'react';

export interface ILightBoxProps {
    mainSrc: string;
    nextSrc?: string;
    prevSrc?: string;
    mainSrcThumbnail?: string;
    prevSrcThumbnail?: string;
    nextSrcThumbnail?: string;
    zoomImageByDefault?: boolean;
    onCloseRequest(): void;
    onMovePrevRequest?(): void;
    onMoveNextRequest?(): void;
    onImageLoad?(): void;
    onImageLoadError?(): void;
    imageLoadErrorMessage?: React.ReactNode;
    onAfterOpen?(): void;
    discourageDownloads?: boolean;
    animationDisabled?: boolean;
    animationOnKeyInput?: boolean;
    disableZoomButtons?: boolean;
    animationDuration?: number;
    keyRepeatLimit?: number;
    keyRepeatKeyupBonus?: number;
    imageTitle?: string;
    imageCaption?: string;
    imageCrossOrigin?: string;
    toolbarButtons?: React.ReactNode[];
    reactModalStyle?: any;
    modalCustomStyle?:any;
    reactModalProps?: any;
    imagePadding?: number;
    clickOutsideToClose?: boolean;
    enableZoom?: boolean;
    wrapperClassName?: string;
    nextLabel?: string;
    prevLabel?: string;
    zoomInLabel?: string;
    zoomOutLabel?: string;
    closeLabel?: string;
}

export default class Lightbox extends React.Component<ILightBoxProps, never> { }
