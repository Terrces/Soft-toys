package com.example.softtoysweb

import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        setContentView(R.layout.activity_main)

        // Получаем WebView из макета
        val webView = findViewById<WebView>(R.id.webView)

        // Включаем JavaScript
        val webSettings: WebSettings = webView.settings
        webSettings.javaScriptEnabled = true

        // Задаем WebViewClient, чтобы открывать ссылки внутри WebView, а не в браузере
        webView.webViewClient = WebViewClient()
        webView.loadUrl("https://github.com/Terrces/GifClicker")
        webSettings.domStorageEnabled = true  // Поддержка локального хранилища
        webSettings.loadWithOverviewMode = true // Масштабирование контента по ширине экрана
        webSettings.useWideViewPort = true
    }
}