System.register(["./application.js"], function (_export, _context) {
    "use strict"

    var Application, canvas, $p, bcr, application
    function topLevelImport(url) {
        return System["import"](url)
    }
    return {
        setters: [
            function (_applicationJs) {
                Application = _applicationJs.Application
            },
        ],
        execute: function () {
            canvas = document.getElementById("GameCanvas")
            $p = canvas.parentElement
            bcr = $p.getBoundingClientRect()
            canvas.width = bcr.width
            canvas.height = bcr.height
            application = new Application()
            topLevelImport("cc")
                .then(function (engine) {
                    return application.init(engine)
                })
                .then(async function () {
                    const event = new CustomEvent("on:engine-ready", {
                        detail: {
                            application: application,
                        },
                    })
                    window.dispatchEvent(event)
                    return application.start()
                })
                ["catch"](function (err) {
                    console.error(err)
                })
        },
    }
})
