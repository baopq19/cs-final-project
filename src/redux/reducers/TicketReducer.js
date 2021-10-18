import { DAT_GHE, SET_INFO } from "../types/TicketType";

const stateDefault = {
    infoShowtime: {
        thongTinPhim: {

        },
        danhSachGhe: []
    },

    danhSachGheDangDat: [],

}

export const TicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_INFO: {
            state.infoShowtime = action.infoShowtime;
            return { ...state };
        }
        case DAT_GHE: {
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];
            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe);
            if (index !== -1) {
                danhSachGheCapNhat.splice(index, 1);
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon);
            }
            return { ...state, danhSachGheDangDat:danhSachGheCapNhat };
        }

        default:
            return { ...state };
    }
}