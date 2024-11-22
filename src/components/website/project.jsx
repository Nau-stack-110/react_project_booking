<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ultra Attractive 3D Project Card</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@300;500;700&display=swap');

        body {
            font-family: 'Rajdhani', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #000;
            overflow: hidden;
        }

        .background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff, #00ffff);
            background-size: 400% 400%;
            animation: rgb-background 15s ease infinite;
            opacity: 0.3;
            filter: blur(50px);
        }

        @keyframes rgb-background {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .card {
            width: 350px;
            background: rgba(15, 15, 15, 0.8);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            backdrop-filter: blur(10px);
            transform-style: preserve-3d;
            perspective: 1000px;
        }

        .card:hover {
            transform: translateY(-10px) rotateX(5deg) rotateY(-5deg);
            box-shadow: 0 15px 40px rgba(0, 255, 255, 0.5);
        }

        .card-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            transition: all 0.5s ease;
        }

        .card:hover .card-image {
            transform: scale(1.1);
            filter: brightness(1.2) contrast(1.2);
        }

        .card-content {
            padding: 25px;
            position: relative;
        }

        .card-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 15px;
            color: #00ffff;
            text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
        }

        .card-description {
            font-size: 16px;
            color: #ddd;
            margin-bottom: 20px;
            line-height: 1.6;
        }

        .card-languages {
            display: flex;
            gap: 12px;
            margin-bottom: 25px;
        }

        .language-tag {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            font-size: 14px;
            color: #fff;
            transition: all 0.3s ease;
        }

        .language-tag:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
        }

        .language-tag i {
            font-size: 16px;
        }

        .html-tag { color: #E44D26; }
        .css-tag { color: #264DE4; }
        .js-tag { color: #F0DB4F; }

        .card-link {
            display: inline-block;
            padding: 12px 24px;
            background: linear-gradient(45deg, #00ffff, #ff00ff);
            color: #111;
            text-decoration: none;
            border-radius: 25px;
            transition: all 0.3s ease;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
            overflow: hidden;
        }

        .card-link:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 255, 255, 0.4);
        }

        .card-link::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: rgba(255, 255, 255, 0.2);
            transform: rotate(45deg);
            transition: all 0.3s ease;
        }

        .card-link:hover::before {
            left: 100%;
        }
    </style>
</head>
<body>
    <div class="background"></div>
    <div class="card animate__animated animate__fadeInUp">
        <img src="https://picsum.photos/350/200" alt="Project Cover" class="card-image">
        <div class="card-content">
            <h2 class="card-title animate__animated animate__fadeInDown">Awesome Project</h2>
            <p class="card-description animate__animated animate__fadeIn">Experience cutting-edge technology and stunning design in this revolutionary project. Prepare to be amazed!</p>
            <div class="card-languages animate__animated animate__fadeIn">
                <span class="language-tag html-tag"><i class="fab fa-html5"></i> HTML</span>
                <span class="language-tag css-tag"><i class="fab fa-css3-alt"></i> CSS</span>
                <span class="language-tag js-tag"><i class="fab fa-js"></i> JavaScript</span>
            </div>
            <a href="https://github.com/your-username/your-repo" class="card-link">
                <i class="fab fa-github"></i> View on GitHub
            </a>
        </div>
    </div>
</body>
</html>