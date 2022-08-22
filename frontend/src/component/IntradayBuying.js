import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStock } from '../actions/stockActions';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import "./IntradayBuying.scss"

const IntradayBuying = () => {
    const dispatch = useDispatch()
    const { stock, loading, error } = useSelector(state => state.stock)
    useEffect(() => {
        if (error) {
            console.log(error.message)
        }
        dispatch(getAllStock())
    }, [dispatch, error])

    return (
        <div className='intraday'>
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
            <div className='intraday__buying'>
                <p>Intraday buying in last 15 days</p>
                <p>Bearish</p>
            </div>
            <div className='intraday__buying__stocks'>
                {stock.map((stocks) => (
                    <div>
                        <p>{stocks.intradayBuying[0].currentCandle}</p>
                        <p>{stocks.intradayBuying[0].previousCandle}</p>
                        <p>{stocks.intradayBuying[0].previousCandleTwo}</p>
                    </div>
                ))}
                {/* <h2>Intraday buying seen in last 15 minutes</h2>
                <h5>Bullish</h5> */}
            </div>
            {/* <div>
                <h2>Intraday buying seen in last 15 minutes</h2>
                <h5>Bullish</h5>
            </div>
            <div>
                <h2>Intraday buying seen in last 15 minutes</h2>
                <h5>Bullish</h5>
            </div>
            <div>
                <h2>Intraday buying seen in last 15 minutes</h2>
                <h5>Bullish</h5>
            </div> */}
        </div>
    )
}

export default IntradayBuying