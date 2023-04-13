package hva.derksen.jip.researchbe.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class User {
    private String name;
    private int age;
    private int weight;
    private int height;
    private double BMI;
}
