
import axios from 'axios';

const baseUrl = 'http://futebol4all.acordei.com.br/v1/d435d91d425c59b0df23ba101c4396e8/';

it('should return championship', () => {
    return axios.get(baseUrl + 'championship/widget_531')
        .then(response => response.data)
        .then(json => {
            expect(json.name).toBe('Copa do Brasil 2017');
        });
});

it('should list all news', () => {
    return axios.get(baseUrl + 'news')
        .then(response => response.data)
        .then(json => {
            expect(json.length).toBe(98);
        })
});