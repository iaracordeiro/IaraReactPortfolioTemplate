import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = true;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Iara ",
    lastName: "Mª Cordeiro Silva",
    initials: "IC", // the example uses first and last, but feel free to use three or more if you like.
    position: "Gerente de Tecnologia",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '💻',
            text: '11 anos em Tecnologia'
        },
        {
            emoji: 'ℹ️',
            text: 'Brasileira | 29 anos | Solteira'
        },
                {
            emoji: '📍',
            text: 'Vila Tolstoi - São Paulo - SP'
        },
        {
            emoji: "📞",
            text: "+55 (11) 99354-5910"
        }
    ],
    socials: [
//        {
//            link: "https://facebook.com",
//            icon: 'fa fa-facebook',
//            label: 'facebook'
//        },
        {
            link: "https://github.com/iaracordeiro",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/iara-cordeiro-s/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "mailto: cordeiroiarajk@gmail.com",
            icon: "fa fa-envelope",
            label: 'email'
        },
        {
            link: "/IaraSilva_CV_pt_v2.pdf",
            icon: 'fa fa-download',
            label: 'cv'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Olá! Sou Iara, apaixonada por tecnologia. São 11 anos de experiência na área, atuando em projetos estratégicos nos segmentos financeiro, automotivo, saúde e bens de consumo.",
    bio2: "Trabalhei com as principais tecnologias do mercado, incluindo arquiteturas Adobe (Magento e AEM), soluções em nuvem na AWS, frameworks de front-end, Sistemas de Fila e automações de processos.",
    bio3: "Minha experiência passa por empresas globais e nacionais de grande porte, como instituições financeiras e organizações do setor de consumo, com foco em soluções escaláveis, inovadoras e que gerem valor para o negócio.",
    bio4: "Movida a desafios e por transformar complexidade em soluções práticas, seja em desenvolvimento, arquitetura de sistemas ou automação.",
    skills:
        {
            proficientWith: ['> javascript', '> typescript', '> react js', '> Angular', '> PL/SQL', '> git', '> AWS tools', '> Adobe Magento', '> Python', '> Agile', '> Scrum', '> Financial Services', '> Customer Services'],
            exposedTo: ['> Adobe AEM', '> CRM', '> Salesforce', '> Cobol']
        }
    ,
    hobbies: [
        {
            label: 'Video games',
            emoji: '🎮'
        },
        {
            label: 'Animes, Mangás e Animações',
            emoji: '🥷🏻'
        },
        {
            label: 'Tênis',
            emoji: '🎾'
        },
        {
            label: 'Academia',
            emoji: '💪'
        },
        {
            label: 'Cozinhar',
            emoji: '🥘'
        },
        {
            label: 'Tarot e Meditação',
            emoji: '🔮'
        },
        {
            label: 'Pets',
            emoji: '🐶😺'
        },
        {
            label: 'Dormir',
            emoji: '💤'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    formacao: [
        {
            label: 'Ciência da Computação - FMU (2014-2017)',
            emoji: '🧪'
        },
        {
            label: 'Tecnologia da Informação - ETEC Santo Antônio (2012 - 2013)',
            emoji: '💻'
        },
        {
            label: 'Design Thinking - ECHOS (2020)',
            emoji: '💡'
        },
        {
            label: 'Inglês Fluente', 
            emoji: '🗣️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "MRM Brasil",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Accenture Brasil",
            live: "",
            source: "",
            image: mock2
        },
        {
            title: "Grupo Santander Brasil",
            live: "",
            source: "",
            image: mock3
        },
        {
            title: "Fundação Vanzolini",
            live: "",
            source: "",
            image: mock4
        }
    ]
}