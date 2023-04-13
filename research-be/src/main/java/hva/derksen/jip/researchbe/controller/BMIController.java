package hva.derksen.jip.researchbe.controller;

import hva.derksen.jip.researchbe.model.User;
import hva.derksen.jip.researchbe.repository.UserRepository;
import hva.derksen.jip.researchbe.service.BMICalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bmi")
public class BMIController {
    @Autowired
    private BMICalculatorService service;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/{name}")
    public double calculateBMIForUser(@PathVariable String name) {
        User user = this.userRepository.getUserByName(name);
        if (user == null) {
            return Double.NaN;
        }
        double BMI = this.service.calculateBMI(user.getWeight(), user.getHeight());
        user.setBMI(BMI);
        return BMI;
    }
}
