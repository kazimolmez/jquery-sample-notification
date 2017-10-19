jQuery(document).ready(function ($) {

    $.notify = function (title, content, type) {

        if (title.length > 0 && content.length > 0 && type.length > 0) {

            var html_content = "";
            html_content += "<div class='notify notify-alert notify-" + type + "'>";
            html_content += "<h5 class='notify-title'>" + title + "</h5>";
            html_content += "<div class='notify-content'>" + content + "</div>";
            html_content += "<div class='notify-btn close-btn'><i class='fa fa-close'></i></div>";
            html_content += "</div>";

            $("body").append(html_content);
            $(".notify-alert").fadeIn(200).animate({ marginRight: "0" }, 300);

            var SetIntrvl = setInterval(function () {
                $(".notify-alert").animate({ marginRight: "-100%" }, 300, function() { $(".notify-alert").remove(); });
            }, 10000);

            $(".notify-alert").hover(function () {
                clearInterval(SetIntrvl);
            }, function () {
                SetIntrvl = setInterval(function () {
                    $(".notify-alert").animate({ marginRight: "-100%" }, 300, function() { $(".notify-alert").remove(); });
                }, 10000);
            });

            $(".notify-btn.close-btn").click(function () {
                clearInterval(SetIntrvl);
                $(".notify-alert").animate({ marginRight: "-100%" }, 300, function() { $(".notify-alert").remove(); });
            });

        }

    }

});