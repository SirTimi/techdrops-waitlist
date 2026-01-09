// test-api.js

async function testWaitlist() {
  try {
    const response = await fetch('http://localhost:3000/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        firstName: 'John',
        role: 'Founder',
        source: 'direct',
      }),
    });

    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

testWaitlist();