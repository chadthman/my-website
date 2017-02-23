$("#postButton").click(function(e) {
    e.preventDefault();
    $.post("contact/addMessage", $("#messageForm").serialize(), function (resp) {
        if (resp.success) {
            $("#messageArea").hide();
            $("#messageArea").html(_generateContent(resp.messages)).fadeIn('slow');
        } else {
            $("#messageArea").html(resp.message);
        }
    });
})

function _generateContent(messages) {
    var message = "";
    messages.forEach(function(element) {
        message = message + "<div class='card'><span>" + element.message + "</span></div>"
    })
    return message;
}