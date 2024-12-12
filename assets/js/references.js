const referenceTable = document.querySelector(".pain");

const references = [
    {
        sl1: 1,
        name1: "Vimlendu Yadav",
        designation1: "BE-EXTC, KCCEMSR",
        image1: "assets/photos/vimlendu.jpeg",
        message1: "I've always been amazed by Rohit Rathod ability to balance academics and creativity. Their passion for learning and pushing boundaries is truly inspiring.",


        sl2: 2,
        name2: "Amaan Rakhangi",
        designation2: "BE-EXTC, KCCEMSR",
        image2: "assets/photos/Amaan.jpeg",
        message2: "What sets Rohit apart is their ability to think outside the box. Their innovation and problem-solving skills are second to none!",

    },

    {
        sl1: 3,
        name1: "Manas Gadge",
        designation1: "BE-EXTC, KCCEMSR",
        image1: "assets/photos/Manas.jpeg",
        message1: "Whenever a complex issue arises, I know I can count on Rohit to provide a solution. Their analytical thinking and persistence make them an invaluable team member.",


        sl2: 4,
        name2: "Aman Khan",
        designation2: "BE-EXTC, KCCEMSR",
        image2: "assets/photos/Aman.jpeg",
        message2: "Not only is Rohit an exceptional student, but they also make a great leader. Their support, guidance, and positivity always make a difference in any group.",
    },
    {
        sl1: 3,
        name1: "Harsh Patole",
        designation1: "BE-EXTC, KCCEMSR",
        image1: "assets/photos/",
        message1: "Rohit consistently goes above and beyond. Their work ethic and attention to detail make them stand out in everything they do.",


        sl2: 4,
        name2: "Maaz Khan",
        designation2: "BE-CS, KCCEMSR",
        image2: "assets/photos/",
        message2: "Whether it’s academic pursuits or personal projects, Rohit sets clear goals and works relentlessly to achieve them. Their drive is truly inspiring.",
    },
];

AOS.init();
const fillData = () => {
    let output = "";

    references.forEach(
        ({
            sl1,
            image1,
            name1,
            designation1,
            message1,
            absbox_for_linkedin1,
            sl2,
            image2,
            name2,
            designation2,
            message2,
            absbox_for_linkedin2,
        }) =>
        (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
    );
    referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
