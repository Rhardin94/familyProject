const family = [
    {
        name: "Kelly",
        picture: "assets/images/kelly/kelly1.jpeg"
    },
    {
        name: "Gage",
        picture: "assets/images/gage/gage1.jpeg"
    },
    {
        name: "Dad",
        picture: "assets/images/dad/dad2.jpg"
    },
    {
        name: "Mom",
        picture: "assets/images/mom/mom2.jpg"
    },
    {
        name: "David",
        picture: "assets/images/david/david1.jpg"
    },
    {
        name: "Daniel",
        picture: "assets/images/daniel/daniel1.jpg"
    },
    {
        name: "Grammy",
        picture: "assets/images/grammy/grammy1.jpg"
    },
    {
        name: "Papa",
        picture: "assets/images/papa/papa1.jpg"
    },
    {
        name: "Mark",
        picture: "assets/images/mark/mark2.jpg"
    },
    {
        name: "Patty",
        picture: "assets/images/patty/patty1.jpg"
    }
]
$(document).ready(function () {
    console.log(family)
    for (let i = 0; i < family.length; i++) {
        let fMember = family[i].name.toLowerCase();
        $(".familyCards").append(
            $("<div>").addClass(`col-lg-2 col-md-2 col-sm-2`).append(
                $("<div>").addClass(`card m-2 ${fMember} family`).append(
                    $("<img>").addClass("card-img-top").attr("src", family[i].picture),
                    $("<div>").addClass("card-body text-center").append(
                        $("<a>").text(family[i].name).addClass('btn btn-success').attr("href", `familyPages/${fMember}.html`)
                    )
                )
            )
        )
    }

})