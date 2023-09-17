import React from 'react'
import Accordion from './Accordion';
import '../components/Style.css'

const FAQ = () => {
    const accordionData = [
        {
          title: 'Why should you use social media for your business?',
          content: 'Social media can be a powerful tool for your business for several reasons. It helps you build brand awareness, engage with your audience, increase website traffic, generate leads, and even boost sales. It allows you to connect with your target audience, showcase your products or services, and stay updated on industry trends and competitors.'
        },
        {
          title: 'What social media platforms should you use for your business?',
          content: 'The choice of platforms depends on your target audience and business type. Common platforms include Facebook, Instagram, Twitter, LinkedIn, Pinterest, and TikTok. Research your audiences preferences and behavior to determine which platforms are most suitable for your business.'
        },
        {
          title: 'How to begin with social media marketing?',
          content: 'Start by creating profiles on the chosen platforms. Develop a social media strategy, including goals, target audience, content plan, and posting schedule. Engage with your audience, analyze results, and adjust your strategy accordingly.'
        },
        {
          title:'What are the best social media tools?',
          content:'Some popular social media tools include Buffer, Hootsuite, Canva for graphics, Sprout Social for analytics, and SEMrush for competitive analysis. These tools can help streamline your social media management tasks.'
        },
        {
          title:'How to find your target audience on social media?',
          content:'Use analytics tools provided by social media platforms to understand your current audience. Conduct market research to identify demographics, interests, and online behavior of your potential customers. This data will help you tailor your content and ads to reach your target audience effectively.'
        },
        {
          title:'How does social media work combined with SEO?',
          content:'Social media can indirectly impact SEO by increasing brand visibility, driving traffic to your website, and improving your online reputation. High-quality social media content can also earn backlinks. Additionally, search engines may consider social signals (likes, shares, comments) as a factor in ranking.'
        },
        {
          title:'What are boosted social media posts, and how do you do them?',
          content:'Boosted posts are paid promotions of your organic social media content to reach a wider audience. To boost a post, go to the respective platforms advertising manager, select the post you want to promote, set your budget and audience targeting, and launch the campaign.'
        },
        {
          title:'What kind of content should you post on social media?',
          content:'Content should align with your business goals and audience preferences. It can include informative blog posts, engaging videos, eye-catching images, user-generated content, behind-the-scenes glimpses, and promotions. Diversify your content to keep your audience interested.'
        },
        {
          title:'Whats the difference between an ad and a post on social media?',
          content:'A post is organic content you share with your followers for free. An ad is paid content that is promoted to a broader audience. Ads can be highly targeted and include features like call-to-action buttons, making them suitable for specific marketing goals.'
        },
      ];
    


  return (
    <div>
    <h1 className='font-semibold text-xl'>Frequently Asked Questions (FAQs)</h1>
    <div className="accordion">
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  </div>
  )
}

export default FAQ