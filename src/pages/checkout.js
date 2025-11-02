import React, { useState } from 'react';
import './checkout.css';

export const Checkout = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    saveInfo: false
  });

  const orderSummary = {
    items: [
      {
        id: 1,
        title: "Abstract Harmony",
        artist: "Sarah Chen",
        price: 299,
        quantity: 1,
        image: "🖼️"
      }
    ],
    subtotal: 299,
    shipping: 25,
    tax: 26.84,
    total: 350.84
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep === 1) {
      onBack();
    } else {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('🎉 Thank you for your purchase! Your order has been placed successfully.');
    }, 2000);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* Checkout Header */}
        <div className="checkout-header">
          <h1>Checkout</h1>
          <div className="checkout-steps">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <span>Shipping</span>
            </div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <span>Payment</span>
            </div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <span>Review</span>
            </div>
          </div>
        </div>

        <div className="checkout-content">
          {/* Checkout Forms */}
          <div className="checkout-forms">
            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <div className="form-section">
                <h2>Shipping Information</h2>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Shipping Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                    />
                  </div>
                  <div className="form-group">
                    <label>ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Country</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                  </select>
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleInputChange}
                  />
                  <label>Save this information for next time</label>
                </div>
              </div>
            )}

            {/* Step 2: Payment Information */}
            {currentStep === 2 && (
              <div className="form-section">
                <h2>Payment Method</h2>
                
                <div className="payment-methods">
                  <div className="payment-method">
                    <div>💳</div>
                    <span>Credit Card</span>
                  </div>
                  <div className="payment-method">
                    <div>📱</div>
                    <span>PayPal</span>
                  </div>
                  <div className="payment-method">
                    <div>🏦</div>
                    <span>Bank Transfer</span>
                  </div>
                </div>

                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review Order */}
            {currentStep === 3 && (
              <div className="form-section">
                <h2>Review Your Order</h2>
                
                <div className="review-section">
                  <h3>Shipping Information</h3>
                  <div className="review-info">
                    <p><strong>{formData.firstName} {formData.lastName}</strong></p>
                    <p>{formData.address}</p>
                    <p>{formData.city}, {formData.zipCode}</p>
                    <p>{formData.email}</p>
                  </div>
                </div>

                <div className="review-section">
                  <h3>Payment Method</h3>
                  <div className="review-info">
                    <p>Credit Card ending in {formData.cardNumber.slice(-4)}</p>
                  </div>
                </div>

                <div className="review-section">
                  <h3>Order Items</h3>
                  <div className="order-items">
                    {orderSummary.items.map(item => (
                      <div key={item.id} className="order-item">
                        <div className="item-image">{item.image}</div>
                        <div className="item-details">
                          <h4>{item.title}</h4>
                          <p>by {item.artist}</p>
                          <p>Qty: {item.quantity}</p>
                        </div>
                        <div className="item-price">${item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="security-info">
                  <h4>🔒 Secure Checkout</h4>
                  <p>Your payment information is encrypted and secure.</p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="checkout-navigation">
              <button onClick={handlePreviousStep} className="btn-back">
                {currentStep === 1 ? '← Back to Gallery' : '← Previous'}
              </button>
              
              {currentStep < 3 ? (
                <button onClick={handleNextStep} className="btn-next">
                  Continue to {currentStep === 1 ? 'Payment' : 'Review'} →
                </button>
              ) : (
                <button 
                  onClick={handlePlaceOrder} 
                  className="btn-place-order"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div className="processing-spinner"></div>
                      Processing...
                    </>
                  ) : (
                    'Place Order 🎨'
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              {orderSummary.items.map(item => (
                <div key={item.id} className="order-item-summary">
                  <div className="item-preview">
                    <div className="preview-image">{item.image}</div>
                    <div className="preview-details">
                      <h4>{item.title}</h4>
                      <p>by {item.artist}</p>
                      <p>Qty: {item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="price-breakdown">
                <div className="price-row">
                  <span>Subtotal</span>
                  <span>${orderSummary.subtotal}</span>
                </div>
                <div className="price-row">
                  <span>Shipping</span>
                  <span>${orderSummary.shipping}</span>
                </div>
                <div className="price-row">
                  <span>Tax</span>
                  <span>${orderSummary.tax}</span>
                </div>
                <div className="price-row total">
                  <span>Total</span>
                  <span>${orderSummary.total}</span>
                </div>
              </div>

              <div className="shipping-info">
                <h4>🚚 Free Shipping</h4>
                <p>Enjoy free shipping on all art purchases over $200.</p>
                <p>Estimated delivery: 7-10 business days</p>
              </div>

              <div className="security-info">
                <h4>🔒 Secure Payment</h4>
                <p>Your transaction is protected with SSL encryption.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};