// TODO : get data from https://github.com/r-spacex/SpaceX-API
$(document).ready(() => {
    getAllHistory().done((data) => {
        const historyArray = data.slice(2, -1)
        let allHistoryEl = ''
        for (const his of historyArray.reverse()) {
            allHistoryEl += makeLaunchElement(his)
        }

        $('.launch-history').append(allHistoryEl)
    })

    function getAllHistory() {
        return $.ajax({
            dataType: "json",
            url: "https://api.spacexdata.com/v2/launches",
            type: "get"
        })
    }

    function makeLaunchElement(data) {
        const launchResult = data.launch_success === true ? 'success' : 'fail'
        return `<div class="launch-data">
                    <h3 class="mission-name"> ${data.mission_name}
                        <span class="launch-year"> ${data.launch_year} </span>
                    </h3>
                    <img src="${data.links.mission_patch_small}" alt="mission logo">
                    <div class="launch-detail">
                        <img class="rocket-icon" src="./assets/icon/icons-rocket.png" alt="rocket icon">
                        <h4 class="rocket-title">Rocket name</h4>
                        <span class="rocket-name">${data.rocket.rocket_name}</span>
    
                        <img class="site-icon" src="./assets/icon/mountain-icon.png" alt="site icon">
                        <h4 class="site-title">Launch site</h4>
                        <span class="site-name">${data.launch_site.site_name_long}</span>
    
                        <img class="status-icon" src="./assets/icon/status-icon.png" alt="status icon">
                        <h4 class="status-title">Launch status</h4>
                        <div class="${launchResult}-box"></div>
                        <span class="status-detail text-${launchResult}">${launchResult}</span>
    
                        <img class="note-icon" src="./assets/icon/note-icon.png" alt="note icon">
                        <h4 class="note-title">Note</h4>
                        <p class="note-detail">${data.details}</p>
                    </div>
                </div>`
    }
})