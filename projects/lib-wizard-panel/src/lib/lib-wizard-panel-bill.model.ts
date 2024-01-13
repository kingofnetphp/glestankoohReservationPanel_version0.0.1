export interface Bill {
    countNight: number;
    countperson: number;
    allPrice: number,
    personPrice: number,
    exteraPerson: number,
    kidPrices: number,
    kidCount: number,
    exteraPersonPrice: number,
    choicedCalender: ChoicedCalender,
    sumeriPersonPrice:any,

}
export interface Register {
    mobile: string,
    name: string, 
    famil: string,
    personId:number
}
export interface CellCalenderReservation {
    DayNumber: number;
    DateM: string;
    DateS: string;
    WeekDayM: string;
    WeekDayS: string;
    Holiday: number;
    halfHoliday: string;
    HotelingStatus: string;
    CermonyStatus: string;
    FoodStatus: string;
    Price: number;
    KidPrice: number;
    ExtraItemPrice: number;
    IncomeReasonRentItemID: string;
    PersonMaxCapacity: number;
    PersonCapacity: number;
    empty_day_tag: number;
    timeout: number;
    selected_in_range_date: number,
    checkin_selected_in_range_date: number,
    checkin_selected_date: number,
    checkout_selected_in_range_date: number,
    checkout_selected_date: number

}

export interface ChoicedCalender {
    startDate: string;
    endDate: string;
    miladiStartDate: string;
    miladiEndDate: string;
    days: CellCalenderReservation[];
}