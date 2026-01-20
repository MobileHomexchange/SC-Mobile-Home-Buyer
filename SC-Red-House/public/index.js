document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    root.innerHTML = `
        <div style="background-color: #b91c1c; color: white; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: sans-serif; text-align: center; padding: 20px;">
            <h1 style="font-size: 3rem; font-weight: bold; margin-bottom: 10px;">SC Mobile Home Buyer</h1>
            <p style="font-size: 1.5rem; margin-bottom: 30px;">Professional Cash Buyers in the Carolinas</p>
            
            <div style="background-color: white; color: black; padding: 40px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.4); max-width: 450px; width: 100%;">
                <h2 style="margin-top: 0; color: #b91c1c;">Get Your Cash Offer</h2>
                <p>Enter your info and we'll contact you within 24 hours.</p>
                <input type="text" placeholder="Your Name" style="width: 100%; padding: 12px; margin: 10px 0; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
                <input type="tel" placeholder="Phone Number" style="width: 100%; padding: 12px; margin: 10px 0; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
                <button onclick="alert('Success! We will call you shortly.')" style="width: 100%; padding: 15px; background-color: #b91c1c; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1.1rem; font-weight: bold; margin-top: 10px;">
                    GET MY CASH OFFER
                </button>
            </div>
            
            <p style="margin-top: 40px; font-weight: bold;">TRUSTED • LOCAL • FAST</p>
        </div>
    `;
});
