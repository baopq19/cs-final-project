import { ticketService } from "../../services/TicketService";
import { SET_INFO } from "../types/TicketType";

export const bookingAction = (booking) => {
    return async (dispatch) => {
        try {
            const result = await ticketService.bookingTicket(booking);
            if (result.status === 200) {
                return true;
            }
        } catch (error) {
            console.error('ERROR', error);
            return false;
        }
    }
}

export const getInfoShowtimeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await ticketService.getInfoShowtime(maLichChieu);
            dispatch({
                type: SET_INFO,
                infoShowtime: result.data.content,
            })
        } catch (error) {
            console.error('ERROR', error);
        }
    }
}

export const addShowtimeAction = (showtime) => {
    return async (dispatch) => {
        try {
            const result = await ticketService.addShowtime(showtime);
            if (result.status === 200) {
                return true;
            }

        } catch (error) {
            console.error('ERROR', error.response);
            return false;
        }
    }
}