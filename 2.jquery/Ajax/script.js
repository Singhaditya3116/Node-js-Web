$(()=>{
    let list = $("#people");
    $("#fetch").click(()=>{
        $.get('https://reqres.in/api/users',(data)=>{
            for(let p of data.data)
            {
                list.append(`<li><img src="${p.avatar}"> ${p.id} ${p.first_name}</li>`);
            }
        })
    })

}
)