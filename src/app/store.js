import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import img1 from '../assets/aska.png';
import img2 from '../assets/goat.png';
import img3 from '../assets/harold.jpeg';
import img4 from '../assets/hospital.png';
import img5 from '../assets/nerd.png';
import img6 from '../assets/soviet.png';
import img7 from '../assets/Picaman.png';
import img8 from '../assets/lion.png';
import img9 from '../assets/sasuke.png';
import img10 from '../assets/auf.png';
import img11 from '../assets/sovpony.png';
import img12 from '../assets/skidward.png';
import { Chess } from 'chess.js';


export const avatars = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];
const user = localStorage.getItem('USER');
const game = new Chess();
const chessBoard = game.board();

export const canMove = (square, possibleMoves) =>{
  if(possibleMoves.filter((el) => el.to === square)){
    return true
  }else{
    return false
  }
}



const preloadedState = {
  ui: {
    theme: 'bright',
    loginBackdrop: false,
  },
  auth: {
    currentUser: user,
    userPicture: avatars[0],
    userPictureNumber: 0,
    preferedTheme: 'bright',
    isLogined: user ? true : false,
  },
  chess: {
    chessBoard: chessBoard,
    selectedLocation: "",
    possibleMoves: [],
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: preloadedState.ui,
  reducers: {
    toggleTheme(state) {
      if (state.theme === 'dark') {
        state.theme = 'bright';
        document.body.style.backgroundColor = '#E7DBC6';
        return state;
      }
      document.body.style.backgroundColor = '#31708E';
      state.theme = 'dark';
      return state;
    },
    toggleLoginBackdrop(state) {
      state.loginBackdrop
        ? (state.loginBackdrop = false)
        : (state.loginBackdrop = true);
      return state;
    },
  },
});

const authSlice = createSlice({
  name: 'auth',
  initialState: preloadedState.auth,
  reducers: {
    login(state, payload) {
      state.currentUser = payload.payload;
      state.isLogined = true;
      localStorage.setItem('user', state.currentUser);
      return state;
    },
    logout(state) {
      state.isLogined = false;
      return state;
    },
    changeName(state, payload) {
      state.currentUser = payload.payload;
      localStorage.setItem('user', state.currentUser);
      return state;
    },
    changePicture(state, payload) {
      state.userPictureNumber = payload.payload;
      state.userPicture = avatars[state.userPictureNumber];
      return state;
    },
  },
});

const chessSlice = createSlice({
  name: 'chess',
  initialState: preloadedState.chess,
  reducers: {
    changeSelectedLocation(state, payload) {
      state.selectedLocation = payload.payload.location;
      state.possibleMoves = game.moves({  verbose: true ,square: state.selectedLocation });
      return state;
    },
    makeMove(state, payload){
      game.move({ from: state.selectedLocation, to: payload.payload.to })
      state.chessBoard = game.board()
      console.log(game.ascii())
      return state
    }
  },
});

const store = configureStore({
  preloadedState,
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
    chess: chessSlice.reducer,
  },
});

export const authActions = authSlice.actions;
export const uiActions = uiSlice.actions;
export const chessActions = chessSlice.actions;

export default store;
