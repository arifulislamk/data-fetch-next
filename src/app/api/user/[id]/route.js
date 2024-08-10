export async function PATCH (request, {params}){
    console.log(params.id);

    const body = await request.json() ;
    const index = comment.findIndex(c => c.id === parseInt(params.id) )

    comment[index] =  {
        id: index + 1,
        body: body.body
    }
    return Response.json({
        message : 'coment updated',
        comment
    })
}
export async function DELETE (request, {params}){
    const newcomment = comment.filter(c => c.id !== parseInt(params.id))
    return Response.json({
        message : 'coment deleted',
        newcomment
    })
}

const comment = [ 
    {
        id: 1,
        postId: 1,
        body: "This is a sample comment"
    },
    {
        id: 2,
        postId: 2,
        body: "This is a sample comment"
    },
    {
        id: 3,
        postId: 3,
        body: "This is a sample comment"
    },
]