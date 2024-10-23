## Definition of Streaming Data

Streaming data refers to the continuous flow of data that is generated in real time from various sources. This type of data is often characterized by its high volume, velocity, and variety, making it suitable for real-time processing and analysis. Examples of streaming data include social media feeds, sensor data from IoT devices, financial transactions, and user activity logs.

Key Characteristics:
- Continuous: Data is generated in an ongoing manner rather than in discrete batches.
- Real-time: Processing and analysis occur simultaneously with data generation, allowing for immediate insights.
- High Volume: Often involves large amounts of data being produced rapidly.
- Variety: Can come in various formats (text, audio, video) and from different sources.

Applications:
- Real-time analytics: Monitoring social media trends, financial markets, or system performance.
- IoT: Collecting and analyzing data from connected devices for applications like smart homes or industrial automation.
- Fraud detection: Analyzing transaction data as it occurs to identify and prevent fraudulent activities.

## Batch Data versus Streaming Data
### Batch Data

Batch data is collected, processed, and analyzed in groups or "batches" at specific intervals. This data is analyzed in larger groups at set intervals, with higher latency—suitable for historical analysis. This type of data possesses the following charcteristics:
Storage: Often stored in databases or data warehouses.
Latency: Higher latency, as data processing happens after the entire batch is collected.
Use Cases: Suitable for tasks like end-of-day reports, monthly summaries, or large-scale data analysis.

Example of batch data include:

Images: In the context of batch data, images might be processed in groups. For example, a dataset of thousands of images can be analyzed using machine learning algorithms to train a model. The entire set is prepared and processed at once, often requiring significant computational resources.

Market Data: An investment firm may download historical stock prices at the end of the trading day to analyze trends and performance over the past week.

Streaming data is generated continuously and processed in real-time or near-real-time. This data is analyzed continuously in real time, with low latency—ideal for immediate decision-making. This type of data possesses the following charcteristics:
Storage: Typically managed in real-time processing systems and may be stored temporarily or in a streaming platform.
Latency: Low latency, allowing for immediate analysis and response.
Use Cases: Ideal for real-time analytics, monitoring systems, and applications like live video feeds or social media updates.

Example of streaming data include:
Images: For streaming data, images can be processed as they are captured. For example, a surveillance camera continuously streams video, and each frame (image) can be analyzed instantly for anomalies or objects of interest. This allows for quick decision-making based on live data.
Market Data: A trading platform processes live stock prices and volume changes, allowing traders to react instantly to market fluctuations.
