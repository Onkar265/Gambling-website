import React, { useState } from 'react';
// import placeholderImage from './image.png'; // Your placeholder image
const Wallet = () => {
  const [option, setOption] = useState('');
  const [upi, setUpi] = useState('');
  const [amount, setAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleOptionClick = (type) => {
    setOption(type);
    setUpi('');
    setAmount('');
    setSuccessMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!upi || !amount) {
      alert('Please fill all mandatory fields');
      return;
    }

    if (option === 'deposit') {
      setSuccessMessage(
        'Payment Successful! It may take 30 mins to process your transaction.'
      );
    } else if (option === 'withdraw') {
      setSuccessMessage(
        'Withdrawal Successful! It may take 30-45 mins to process your payment.'
      );
    }

    setOption('');
    setUpi('');
    setAmount('');
  };

  return (
    <div style={styles.fullScreen}>
      <div style={styles.container}>
        <h2 style={styles.title}>💰 Payment Portal</h2>

        <div style={styles.buttonGroup}>
          <button
            style={{ ...styles.optionButton, background: styles.gradient }}
            onClick={() => handleOptionClick('deposit')}
          >
            Deposit
          </button>
          <button
            style={{ ...styles.optionButton, background: styles.gradient }}
            onClick={() => handleOptionClick('withdraw')}
          >
            Withdrawal
          </button>
        </div>

        {option && !successMessage && (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>UPI ID (mandatory)</label>
              <input
                type="text"
                value={upi}
                onChange={(e) => setUpi(e.target.value)}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Amount (mandatory)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                required
                style={styles.input}
              />
            </div>

            {option === 'deposit' && (
              <div style={styles.formGroup}>
                <label style={styles.label}>Attached Photo</label>
                <div style={styles.photoWrapper}>
                  {/* <img
                    src={placeholderImage}
                    alt="Deposit"
                    style={styles.photo}
                  /> */}
                </div>
              </div>
            )}

            <button type="submit" style={styles.submitButton}>
              Submit
            </button>
          </form>
        )}

        {successMessage && (
          <div style={{ ...styles.successMessage, ...styles.fadeIn }}>
            <h3>{successMessage}</h3>
            <button
              style={{ ...styles.submitButton, marginTop: '15px' }}
              onClick={() => setSuccessMessage('')}
            >
              Make Another Transaction
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  fullScreen: {
    minHeight: '100vh',
    backgroundColor: '#0d0d0d', // full dark background
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  container: {
    width: '100%',
    maxWidth: '450px',
    padding: '30px',
    borderRadius: '15px',
    backgroundColor: '#121212',
    color: '#FFD700',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 10px 25px rgba(255, 215, 0, 0.3)',
    transition: 'all 0.3s ease',
  },
  title: {
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '30px',
    textShadow: '2px 2px 10px #FFD700',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '25px',
  },
  gradient: 'linear-gradient(90deg, #FFD700, #FFA500)',
  optionButton: {
    flex: 1,
    margin: '0 8px',
    padding: '12px',
    borderRadius: '10px',
    border: 'none',
    color: '#121212',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(255, 215, 0, 0.5)',
  },
  form: {
    marginTop: '10px',
  },
  formGroup: {
    marginBottom: '18px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '#FFD700',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #555',
    backgroundColor: '#1e1e1e',
    color: '#FFD700',
    fontSize: '14px',
  },
  photoWrapper: {
    border: '2px solid #FFD700',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
  },
  photo: {
    width: '100%',
    display: 'block',
  },
  submitButton: {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(90deg, #FFD700, #FFA500)',
    color: '#121212',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
    transition: 'all 0.3s ease',
  },
  successMessage: {
    marginTop: '25px',
    padding: '25px',
    borderRadius: '15px',
    backgroundColor: '#1e1e1e',
    textAlign: 'center',
    color: '#FFD700',
    boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)',
    opacity: 0,
  },
  fadeIn: {
    animation: 'fadeIn 0.8s forwards',
  },
};

// Add fadeIn animation keyframes
const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default Wallet;