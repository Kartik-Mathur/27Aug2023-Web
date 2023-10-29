// Body ke andar teen cheeze append krni padegi
// 1. Input: To take task name from user
// 2. Button: To add task
// 3. UL: To add task in it
// $('body').append( $('<input>').attr('placeholder','Enter Task Name').addClass('inp')).append($('<button>').text('Add Task').click((ev)=>{$('.factsList').append( $('<div>').addClass('factItemParent').html(`<div class="task factItem"><input type="checkbox" name=""  class="checkBox"><span class="text">${$('.inp').val()}</span></div><div class="btnGrp"><button class="deleteBtn">X</button><button class="downBtn">↓</button><button class="upBtn">↑</button></div>`))})).append( $('<ul>').addClass('factsList'))

/*
// Body ke andar teen cheeze append krni padegi
// 1. Input: To take task name from user
// 2. Button: To add task
// 3. UL: To add task in it
$('body')
    .append( //appending input inside body
        $('<input>')
            .attr('placeholder','Enter Task Name')
            .addClass('inp')
    )
    .append(// appending button inside body
        $('<button>')
            .text('Add Task')
            .click((ev)=>{
                // Idhar input ki value uthani pdagi
                // $('.inp').val()--> isko ul ke andar add krna padega
                $('.factsList') // Iske andar append karna hai text ko
                    .append( // FactList ke andar factItemParent:Div ko add krna hai
                        $('<div>')
                            .addClass('factItemParent')
                            .html(
                                `
                                <div class="task factItem">
                                    <input type="checkbox" name=""  class="checkBox">
                                    <span class="text">${$('.inp').val()}</span>
                                </div>
                                <div class="btnGrp">
                                    <button class="deleteBtn">X</button>
                                    <button class="downBtn">↓</button>
                                    <button class="upBtn">↑</button>
                                </div>
                                `
                            )
                            
                    )
            })
    )
    .append( // appending ul inside body
        $('<ul>')
            .addClass('factsList')
    )
    
*/

$('body')
    .append( //appending input inside body
        $('<input>')
            .attr('placeholder','Enter Task Name')
            .addClass('inp')
    )
    .append(// appending button inside body
        $('<button>')
            .text('Add Task')
            .click((ev)=>{
                // Idhar input ki value uthani pdagi
                // $('.inp').val()--> isko ul ke andar add krna padega
                $('.factsList') // Iske andar append karna hai text ko
                    .append( // FactList ke andar factItemParent:Div ko add krna hai
                        $('<div>')
                            .addClass('factItemParent')
                            .append(
                                $('<div>')
                                    .addClass("task factItem")
                                    .append(
                                        $('<input>')
                                            .addClass("checkBox")
                                            .attr('type','checkbox')
                                    )
                                    .append(
                                        $('<span>')
                                            .addClass("text")
                                            .text($('.inp').val())
                                    )
                            )
                            .append(
                                $('<div>')
                                    .addClass("btnGrp")
                                        .append(
                                            $('<button>')
                                                .addClass("deleteBtn")
                                                .text('X')
                                                .on('click',(ev)=>{
                                                    $(ev.target).parent().parent().remove()
                                                })
                                        )
                                        .append(
                                            $('<button>')
                                                .addClass("downBtn")
                                                .text('↓')
                                                .on("click",(ev)=>{
                                                    // Current Button ka parent: btnGrp
                                                    // Uska Parent hoga: jisse uske nextElementSibling se swap krna hai
                                                    // console.log(ev.target)
                                                    // console.log($(ev.target).parent())
                                                    // console.log($(ev.target).parent().parent())
                                                    $(ev.target).parent().parent().insertAfter($(ev.target).parent().parent().next())
                                                })
                                        )
                                        .append(
                                            $('<button>')
                                                .addClass("upBtn")
                                                .text('↑')
                                                .on("click",(ev)=>{
                                                    // Current Button ka parent: btnGrp
                                                    // Uska Parent hoga: jisse uske previousElementSibling se swap krna hai
                                                    console.log(ev.target)
                                                    console.log($(ev.target).parent())
                                                    console.log($(ev.target).parent().parent())
                                                    $(ev.target).parent().parent().insertBefore($(ev.target).parent().parent().prev())
                                                })
                                        )
                            )
                    )
            })
    )
    .append( // appending ul inside body
        $('<ul>')
            .addClass('factsList')
    )
    