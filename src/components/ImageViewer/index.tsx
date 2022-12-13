import React from 'react'
import ImgsViewer from "react-images-viewer";

type Prop = {
    currImg: number
    viewerIsOpen: boolean
    gotoPrevious: () => void
    gotoNext: () => void
    closeViewer: () => void
    images: {src: string}[]
}

const ImageViewer = ({ images, currImg,
    viewerIsOpen,
    gotoPrevious,
    gotoNext,
    closeViewer }: Prop) => {
    return (
        <ImgsViewer
            imgs={images}
            currImg={currImg}
            isOpen={viewerIsOpen}
            onClickPrev={gotoPrevious}
            onClickNext={gotoNext}
            onClose={closeViewer}
        />
    );
}


export default ImageViewer