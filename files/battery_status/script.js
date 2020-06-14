window.onload = function() {
    navigator.getBattery().then(function(battery) {
        let b = document.querySelector('.battery-level-block');
        let parent = document.querySelector('.battery-level-percentage');
        let element = parent.querySelector('p');

        let changeLevel = (el) => el.innerText = `${battery.level * 100}%`;
        let chargingchange = (c) => {
            c ? b.classList.add('anim') :
                b.classList.remove('anim'),
                b.style.width = `${battery.level*100}%`;
        };

        battery.addEventListener('chargingchange', () => chargingchange(battery.charging));
        battery.addEventListener('levelchange', () => changeLevel(element));

        (() => {
            changeLevel(element);
            chargingchange(battery.charging);
        })();
    });
};