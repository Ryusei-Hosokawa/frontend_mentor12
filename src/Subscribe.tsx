import React from "react";
import "./css/SubscriptionCard.css";

export default function SubscriptionCard() {
    return (
        <div className="subscription-card">
            <div className="first-contents">
                <h1 className="first-contents__title">Join our community</h1>
                <h2 className="refund-policy">
                    30-day, hassle-free money back guarantee
                </h2>
                <p className="first-contents__description">
                    Gain access to our full library of tutorials along with
                    expert code reviews.
                    <br />
                    Perfect for any developers who are serious about honing
                    their skills.
                </p>
            </div>
            <div className="contents-wrap">
                <div className="second-contents">
                    <h2 className="second-contents__title">
                        Monthly Subscription
                    </h2>
                    <div className="pricing-info__box">
                        <strong className="pricing-info__price">$29</strong>
                        <span className="pricing-info__period">per month</span>
                    </div>
                    <p className="pricing-benefit">Full access for less than $1 a day</p>
                    <button className="sign-up__button">Sign Up</button>
                </div>
                <div className="third-contents">
                    <h2 className="third-contents__title">Why Us</h2>
                    <p className="service-benefits">Tutorials by industry experts<br />Peer & expert code review<br />Coding exercises<br />Access to our GitHub repos<br />Community forum<br />Flashcard decks<br />New videos every week</p>
                </div>
            </div>
        </div>
    );
}
