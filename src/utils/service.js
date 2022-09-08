import axios from 'axios';

const getAdminData = async () => {
    const BASE_URI = "https://geektrust.s3-ap-southeast-1.amazonaws.com";
    const END_POINT = "adminui-problem/members.json"
    const encodedURI = window.encodeURI(`${BASE_URI}/${END_POINT}`);

    return await axios({
        method: "GET",
        url: encodedURI,
        "headers": {
            "content-type": 'Application/json',
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        return err;
    })
};

export {
    getAdminData
}
