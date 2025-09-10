import javax.swing.*;
import java.awt.*;
import java.awt.event.*;


public class newframe extends JFrame {

public static void main(String[] args) {
newframe frameTabel = new newframe();
}

JLabel welcome = new JLabel("Welcome to My Brunel PAL");
JPanel panel = new JPanel();

newframe(){
super("Welcome");
setSize(424,251);
setLocation(500,280);
panel.setLayout (null); 

welcome.setBounds(111,47,335,105);

panel.add(welcome);

getContentPane().add(panel);
setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
setVisible(true);
}

}