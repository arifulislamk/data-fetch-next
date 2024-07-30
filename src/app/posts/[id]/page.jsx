import React from 'react';
const getDetailsData = async(id)=> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data;
}

export const generateMetadata = async ({params}) => {
    const {title,body} = await getDetailsData(params.id)
    return {
        title: `${title}`,
        description: body,
        keywords: body.split(' ')
    }
}
const detailspage = async({params}) => {
    const {title, body} = await getDetailsData(params.id)

    return (
        <div>
            post details of {params.id}
            <h6>{title}</h6>
            <h6>{body}</h6>
        </div>
    );
};

export default detailspage;