package com.example.app;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String index(Model model) {
        // ここで将来的に予約データをデータベースから取得し、
        // model.addAttribute("reservations", reservationList); のように渡します。
        
        return "index"; // templates/index.html を表示
    }
}
