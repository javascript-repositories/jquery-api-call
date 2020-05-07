$(document).ready(function () {
    const url = "https://rickandmortyapi.com/api/character";

    $.ajax({
        url: url,
        type: "GET",
        success: function (data) {
            console.log(data.results);
            populateCharacters(data.results);
        },
        error: function (error) {
            console.log(error);
        },
    });

    function populateCharacters(characters) {
        $.each(characters, function (key, value) {
            // console.log("key", key);
            // console.log("value", value);

            $("#cards").append(
                `<div class="col-sm-4">
                    <div class="card">
                        <h3>${value.name}</h3>
                        <div class="card-border"></div>        
                        <button class="btn">Click to view details</button>
                        <div class="card-more-text">
                            <p>Species: ${value.species}</p>
                            <p>Status: ${value.status}</p>
                            <p>Gender: ${value.gender}</p>
                        </div>
                    </div>
                </div>`
            );
        });

        $(".card-border").animate(
            {
                width: "100%",
            },
            4000
        );
    }

    $(document).on("click", "button", function () {
        $(this).next(".card-more-text").toggle("medium");
    });
});
