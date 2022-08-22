import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStock } from '../actions/stockActions';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import "./RsiOverBought.scss"



const RsiOverBought = () => {
    const dispatch = useDispatch()
    const { stock, loading, error } = useSelector(state => state.stock)
    useEffect(() => {
        if (error) {
            console.log(error.message)
        }
        dispatch(getAllStock())
    }, [dispatch, error])
    return (
        <div className='rsi__over_bought'>
            <div>
                <Link to="/page" className='top__gainer__iconArrow'>
                    <IconButton className='icon'>
                        <ArrowBackIcon style={{ color: "red", position: 'relative', right: "250px", fontSize: "40px" }} />
                    </IconButton>
                </Link>
                <Link to="/" className='top__gainer__iconArrow'>
                    <IconButton className='icon'>
                        <HomeIcon style={{ color: "white", position: 'relative', left: "250px", fontSize: "40px" }} />
                    </IconButton>
                </Link>
            </div>
            <div className='rsi__overbought'>
                <h1>RSI Reversal</h1>
                <h4>Bearish </h4>
            </div>
            <div className='rsi_overbought_stock'>
                {stock &&
                    stock.map((stocks) => (
                        <div className='rsi'>
                            <h3>{stocks.rsiReversal[0].max}</h3>
                            <h3>{stocks.rsiReversal[0].rsiGreater}</h3>
                            <h3>{stocks.rsiReversal[0].volume}</h3>
                        </div>
                    ))}
            </div>
            {/* <div>
                <h1>RSI Reversal</h1>
                <h4>Bearish </h4>
            </div>
            <div>
                <h1>RSI Reversal</h1>
                <h4>Bearish </h4>
            </div>
            <div>
                <h1>RSI Reversal</h1>
                <h4>Bearish </h4>
            </div>
            <div>
                <h1>RSI Reversal</h1>
                <h4>Bearish </h4>
            </div> */}
        </div>
    )
}

export default RsiOverBought