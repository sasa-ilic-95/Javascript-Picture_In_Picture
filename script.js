const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
const selectMediaStream = async ()=>{
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }
    } catch (error) {
        // Catch error
        console.log('whoops, error here: ', error );
    }
}

button.addEventListener('click',async ()=>{
    // Disable Button
    button.disabled = true;
    // Start pic in pic
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});


//  On load
selectMediaStream();