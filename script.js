const videoElement = document.getElementById('video')
const button = document.getElementById('button')

const selectMediaStream = async () => {
  try {
    // prompt to select media stream, pass to video element then play
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (error) {
    console.log('Ooops', error)
  }
}

button.addEventListener('click', async () => {
  button.disabled = true

  await videoElement.requestPictureInPicture()

  // re enable button if request is denied
  button.disabled = false
})

selectMediaStream()
