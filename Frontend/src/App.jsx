// App.jsx
import React from 'react';
import Navbar from './pages/Navbar';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Submission from './pages/Submission';
import PublicationSection from './pages/PublicationSection';
import Topics from './pages/Topics';
import KeyDates from './pages/KeyDates';
import KeynoteSpeakers from './pages/KeynoteSpeakers';
import ContactForm from './pages/ContactForm';
import Register from './pages/Register';
import FAQ from './pages/FAQ';
import Committee from './pages/Committee';
import "./App.css";

function App() {
    return (
        <>
            <div className='w-full'>
                <section id="home"><MainPage /></section>
                <Navbar />
                <section id="about"><About /></section>
                <section id="submission"><Submission /></section>
                <section id="publication"><PublicationSection /></section>
                <section id="topics"><Topics /></section>
                <section id="keydates"><KeyDates /></section>
                <section id="speakers"><KeynoteSpeakers /></section>
                <section id="register"><Register /></section>
                <section id="faq"><FAQ /></section>
                <section id="committee"><Committee /></section>
                <section id="contact"><ContactForm /></section>
            </div>

        </>
    );
}

export default App;
