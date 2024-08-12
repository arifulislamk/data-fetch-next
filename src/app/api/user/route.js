export async function GET (){
    return Response.json({
        comment
    }, {
        headers: {
            "set-Cookie":"mode=day",
        }
    })
}

export async function POST (request){
    const newcomment = await request.json();
    comment.push({
        id: comment.length + 1,
        body: newcomment.body
    });
    return Response.json({
        message: "Comment added successfully",
        comment: comment
    });
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
        id: 1,
        postId: 3,
        body: "This is a sample comment"
    },
]