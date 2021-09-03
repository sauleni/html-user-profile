window.onload = () => {
    // sizeMenu();
    let menuIcon = document.getElementById("menuIcon");
    let menu = document.getElementById("menu");

    menuIcon
        ? menuIcon.addEventListener("click", () => {
            if (menu.style.display === "none" || !menu.style.display) {
                menu.style.display = "flex";
                menuIcon.children[0].className = "fa fa-times";
            } else {
                menu.style.display = "none";
                menuIcon.children[0].className = "fa fa-bars"
                    ;
            }
        })
        : null;

    let myProfile = document.getElementById("myProfile");
    let myDetails = document.getElementById("myDetails");
    let mySecurity = document.getElementById("mySecurity");
    let myNotifications = document.getElementById("myNotifications");
    let mySocial = document.getElementById("mySocial");

    let myProfileBtn = document.getElementById("profile");
    let myDetailsBtn = document.getElementById("details");
    let mySecurityBtn = document.getElementById("security");
    let myNotificationsBtn = document.getElementById("notifications");
    let mySocialBtn = document.getElementById("social");

    myProfileBtn.addEventListener("click", () => {
        myProfile.style.display = "flex";
        myDetails.style.display = "none";
        mySecurity.style.display = "none";
        myNotifications.style.display = "none";
        mySocial.style.display = "none";
    })

    myDetailsBtn.addEventListener("click", () => {
        myDetails.style.display = "flex";
        myProfile.style.display = "none";
        mySecurity.style.display = "none";
        myNotifications.style.display = "none";
        mySocial.style.display = "none";
    })

    mySecurityBtn.addEventListener("click", () => {
        mySecurity.style.display = "flex";
        myDetails.style.display = "none";
        myProfile.style.display = "none";
        myNotifications.style.display = "none";
        mySocial.style.display = "none";
    })

    myNotificationsBtn.addEventListener("click", () => {
        myNotifications.style.display = "flex";
        myDetails.style.display = "none";
        mySecurity.style.display = "none";
        myProfile.style.display = "none";
        mySocial.style.display = "none";
    })

    mySocialBtn.addEventListener("click", () => {
        mySocial.style.display = "flex";
        myDetails.style.display = "none";
        mySecurity.style.display = "none";
        myNotifications.style.display = "none";
        myProfile.style.display = "none";
    })
};