import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { AttachmentsApi } from '../../../src/api/attachments';
import { createReadStream } from 'streamifier';
import { testJwt } from '../../mocks/jwt';

describe('Attachments API', () => {
    const serviceUrl = 'http://some-url.com';

    let httpSpy;
    let api;

    const authHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    const scope = 'app';

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new AttachmentsApi({serviceUrl, authHeaders, scope});
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#create', () => {
        it('should call http', () => {
            const fullUrl = `${serviceUrl}/v1/attachments?access=public`;
            const source = createReadStream('some source object');

            return api.create('public', source).then(() => {
                httpSpy.args[0][0].should.eq('POST');
                httpSpy.args[0][1].should.eq(fullUrl);
                httpSpy.args[0][2].should.be.instanceof(FormData);
                httpSpy.args[0][3].should.eql(authHeaders);
            });
        });
    });
});
