package hva.derksen.jip.researchbe.service;

import org.springframework.stereotype.Service;

@Service
public class BMICalculatorService {
    public double calculateBMI(int weight, int height) {
        return weight / (Math.pow(height, 2)) * 10000;
    }
}
