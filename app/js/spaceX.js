// TODO : get data from https://github.com/r-spacex/SpaceX-API
$(document).ready(() => {
})

function makeLaunchElement(data) {
    return `<div class="launch-data">
                <h3 class="mission-name"> ${data.missionName}
                    <span class="launch-year"> 2018 </span>
                </h3>
                <img src="https://images2.imgbox.com/a7/ec/sbwePzVD_o.png" alt="mission logo">
                <div class="launch-detail">
                    <img class="rocket-icon" src="./assets/icon/icons-rocket.png" alt="rocket icon">
                    <h4 class="rocket-title">Rocket name</h4>
                    <span class="rocket-name">Falcon 9</span>

                    <img class="site-icon" src="./assets/icon/mountain-icon.png" alt="site icon">
                    <h4 class="site-title">Launch site</h4>
                    <span class="site-name">Cape Canaveral Air Force Station Space Launch Complex 40</span>

                    <img class="status-icon" src="./assets/icon/status-icon.png" alt="status icon">
                    <h4 class="status-title">Launch status</h4>
                    <span class="status-detail text-success">Success</span>

                    <img class="note-icon" src="./assets/icon/note-icon.png" alt="note icon">
                    <h4 class="note-title">Note</h4>
                    <p class="note-detail">Cape Canaveral Air Force Station Space Launch Complex 40</p>
                </div>
            </div>`
}