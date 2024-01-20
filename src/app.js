/*
# @class: VideoPlayer
# @author: JuanFuentes
# @created: 19-01-2024
# @updated: 19-01-2024
*/

class VideoPlayer {
    constructor(_video) {
        this.video = _video
    }
}

const _player = new VideoPlayer(document.querySelector("video"))