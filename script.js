const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// promt socila media, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('woops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // start PIP
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});

// On load
selectMediaStream();