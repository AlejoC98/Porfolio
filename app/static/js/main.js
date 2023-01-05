var app = new Vue({
    el: "#content",
    data: {
        active: undefined,
        menu: true,
        sidebar_tabs: [
            {
                icon: "fas fa-home",
                text: "Home"
            },
            {
                icon: "fas fa-user",
                text: "About"
            },
            {
                icon: "fas fa-laptop-code",
                text: "What I Do"
            },
            {
                icon: "fas fa-file-alt",
                text: "Resumen"
            },
            {
                icon: "fas fa-list-alt",
                text: "Portfolio"
            },
            {
                icon: "fas fa-envelope",
                text: "Contact"
            },
        ],
        services: [
            {
                icon: "fas fa-palette",
                title: "Graphic Design",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum harum commodi, et corrupti rem velit deleniti iure ratione architecto totam."
            },
            {
                icon: "fas fa-desktop",
                title: "Web Design",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum harum commodi, et corrupti rem velit deleniti iure ratione architecto totam."
            },
            {
                icon: "fas fa-pencil-ruler",
                title: "UI/UX Design",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum harum commodi, et corrupti rem velit deleniti iure ratione architecto totam."
            },
            {
                icon: "fas fa-paint-brush",
                title: "App Design & Develop",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum harum commodi, et corrupti rem velit deleniti iure ratione architecto totam."
            },
            {
                icon: "fas fa-code",
                title: "DataBase",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum harum commodi, et corrupti rem velit deleniti iure ratione architecto totam."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile Apps",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum harum commodi, et corrupti rem velit deleniti iure ratione architecto totam."
            },
        ],
        skills: [
            {
                porcent: "75%",
                name: "Web Design"
            },
            {
                porcent: "80%",
                name: "Vue JS"
            },
            {
                porcent: "90%",
                name: "HTML/CSS"
            },
            {
                porcent: "90%",
                name: "JavaScript"
            },
            {
                porcent: "100%",
                name: "Bootstrap"
            },
            {
                porcent: "85%",
                name: "Python"
            },
            {
                porcent: "80%",
                name: "PHP"
            },
            {
                porcent: "75%",
                name: "WordPress"
            },
            {
                porcent: "90%",
                name: "SQL"
            },
            {
                porcent: "95%",
                name: "Git"
            },
        ],
        works_links: ["All", "WordPress"],
        works: [
            {
                img: "",
                title: "",
                category: "",
            },
            {
                img: "",
                title: "",
                category: "",
            },
            {
                img: "",
                title: "",
                category: "",
            },
        ],
        modal: {
            status: false,
            title: "Pruebas",
            image: "",
            info: "",
            details: [
                "Client:Neil Patel",
                "Industry:Information Technologies",
                "Technologies:HTML5, CSS3, PHP, jQuery, Bootstrap 4",
                "Date:Jan 22, 2020",
                "URL:www.example.com",
                "Share",
            ]
        }
    },
    methods: {
        myEventHandler(){
            if(window.outerWidth <= 1024)
                this.menu = false
            else
                this.menu = true
        }
    },
    computed: {
        scree_size() {
            this.myEventHandler();
        },
        create_modal() {
            var work = event.target;

            work = work.parentElement;

            this.modal.image = work.getElementsByTagName("img")[0].src;
        }
    },
    created() {
        window.addEventListener("resize", this.myEventHandler);
    },
    destroyed() {
        window.removeEventListener("resize", this.myEventHandler);
    },
    delimiters: ["[[", "]]"]
})