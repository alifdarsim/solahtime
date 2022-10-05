/*This script is the list of reference 
coordinate point use by JAKIM
Original document: https://www.e-solat.gov.my/index.php?siteId=24&pageId=43 */

const refcoordinate = (state, zone) => {
    let data = {
        "perlis": {
            1: {
                lat: { h: 6, m: 25, s: 19 },
                lng: { h: 100, m: 7, s: 18 },
            }
        },
        "kedah": {
            1: {
                lat: { h: 6, m: 25, s: 19 },
                lng: { h: 100, m: 7, s: 18 }
            },
            2: {
                lat: { h: 5, m: 35, s: 0 },
                lng: { h: 100, m: 20, s: 30 }
            },
            3: {
                lat: { h: 6, m: 15, s: 30 },
                lng: { h: 100, m: 30, s: 30 }
            },
            4: {
                lat: { h: 5, m: 33, s: 0 },
                lng: { h: 100, m: 36, s: 30 }
            },
            5: {
                lat: { h: 5, m: 8, s: 0 },
                lng: { h: 100, m: 29, s: 30 }
            },
            6: {
                lat: { h: 6, m: 27, s: 0 },
                lng: { h: 99, m: 38, s: 0 }
            },
            7: {
                lat: { h: 5, m: 47, s: 15 },
                lng: { h: 100, m: 20, s: 30 },
                e: 1214
            }
        },
        "johor": {
            1: {
                lat: { h: 2, m: 35, s: 0 },
                lng: { h: 104, m: 19, s: 0 }
            },
            2: {
                lat: { h: 1, m: 43, s: 0 },
                lng: { h: 103, m: 32, s: 0 }
            },
            3: {
                lat: { h: 1, m: 39, s: 0 },
                lng: { h: 103, m: 12, s: 0 }
            },
            4: {
                lat: { h: 2, m: 16, s: 0 },
                lng: { h: 102, m: 32, s: 0 }
            },
        }

    }

    const refcoordinate = data[state][zone];
    return refcoordinate;
}

export default refcoordinate;